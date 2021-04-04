import * as React from 'react';
import { Form, Icon, Input } from 'semantic-ui-react';

export interface ISearchFormProps {
    onChange: (searchRequest: string) => void;
}

function SearchForm(props: ISearchFormProps) {
    return (
        <Form onSubmit={() => { }}>
            <Form.Group>
                <Form.Field inline width={4}>
                    <Input
                        label="Name"
                        placeholder="Enter name to search.."
                        onChange={event => props.onChange(event.target.value)}
                    />
                </Form.Field>
            </Form.Group>
        </Form>
    );
}


export default SearchForm;
