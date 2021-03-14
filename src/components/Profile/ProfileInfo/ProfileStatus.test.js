import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props to be in the state", () => {
        const component = create(<ProfileStatus status="test-status" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("test-status");
    });
    test("span", () => {
        const component = create(<ProfileStatus status="test-status" />);
        const root = component.root
        let span = root.findByType("span")
        expect(span).not.toBeNull();
    });
    test("span", () => {
        const component = create(<ProfileStatus status="test-status" />);
        const root = component.root
        let span = root.findByType("span")
        expect(span.children).toBe("test-status");
    });
    test("input shold be displaed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="test-status" />);
        const root = component.root
        let span = root.findByType("span")
        span.props.onDoubleClick()
        let input = root.findByType("input")
        expect(input.props.value).toBe("test-status");
    });
    test("callback shold be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="test-status" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});

// почитать про тесты
// wallaby js