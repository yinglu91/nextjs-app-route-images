import { FormEvent, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

type Props = {
  updateQueryTerm: (query: string) => void;
};
const SearchForm = ({ updateQueryTerm }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (e: any) => setInputValue(e.target.value);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    updateQueryTerm(inputValue);
    setInputValue('');
  }

  return (
    <div>
      <Alert>
        This page fetches data <strong>client-side</strong>. In order to not
        leak API credentials, the request is sent to a NextJS{' '}
        <strong>route handler</strong> that runs on the server. This route
        handler then fetches the data from the Unsplash API and returns it to
        the client.
      </Alert>

      <Form onSubmit={handleSubmit}>
        <Form.Group
          className='mb-3'
          controlId='search-input'
        >
          <Form.Label>Search query</Form.Label>
          <Form.Control
            placeholder='E.g. cats, hotdogs, ...'
            onChange={handleOnChange}
            value={inputValue}
          />
        </Form.Group>
        <Button
          type='submit'
          className='mb-3'
          disabled={inputValue.length === 0}
        >
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchForm;
