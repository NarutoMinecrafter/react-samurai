import React, { FC } from 'react'
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { filterType } from '../../redux/users-reducer'
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/users-selectors'

const formValidate = () => {

    const errors = {}

    return errors
}
export const UsersSearchForm: FC<PropsType> = ({ onFilterChanget }) => {
    const filter = useSelector(getFilter)

    const submit: submitType = (values, { setSubmitting }) => {
        const filter = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        onFilterChanget(filter)
        setSubmitting(false)
    }

    return <div>
        <Formik
            enableReinitialize
            initialValues={{ term: filter.term, friend: String(filter.friend) as 'null' | 'true' | 'false' }}
            validate={formValidate}
            onSubmit={submit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="text" name="term" />
                    <Field as="select" name="friend">
                        <option value="null">All</option>
                        <option value="true">Followed</option>
                        <option value="false">Unfollowed</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        Search
                    </button>
                </Form>
            )}
        </Formik>
    </div>
}
type filterValueType = {
    term: str
    friend: 'null' | 'true' | 'false'
}
// export type submitType = (values: filterType, formikActions: FormikActions<{ term: str }>) => void
export type submitType = (values: filterValueType, formikHelpers: FormikHelpers<filterValueType>) => void | Promise<any>
type PropsType = { onFilterChanget: (filter: filterType) => void }
