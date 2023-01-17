import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorMessage from '../errorMessage/ErrorMessage';
import {Formik, Form, Field, ErrorMessage as FormikErrorMessage} from 'formik';
import * as Yup from 'yup';
import useMarvelService from '../../services/MarvelService';

import './charSearchForm.scss';

const CharSearchForm = () => {
    const [char, setChar] = useState(null);

    const {getCharacterByName, process, setProcess} = useMarvelService();

    const updateChar = (name) => {
        getCharacterByName(name)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'))
    }

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const searchResults = () => {
        if (!char) {
            return null;
        }

        if (char.length > 0) {
            return (
                <div className="char__search-wrapper">
                    <div className="char__search-success">There is! Visit {char[0].name} page?</div>
                    <Link to={`/characters/${char[0].id}`} className="button button__secondary">
                        <div className="inner">To page</div>
                    </Link>
                </div>
            );
        } else {
            return (
                <div className="char__search-error">
                    The character was not found. Check the name and try again
                </div>
            );
        }
    }
    
    const results = searchResults();

    const errorMessage = process === 'error' ? <div className="char__search-critical-error"><ErrorMessage /></div> : null;
    
    return (
        <div className="char__search-form">
            <Formik
                initialValues = {{
                    charName: ''
                }}
                validationSchema = {Yup.object({
                    charName: Yup.string().required('This field is required!')
                })}
                onSubmit = {({charName}) => {
                    updateChar(charName);
                }}
            >
                <Form onChange={(e) => e.target.value ? setChar(null) : null}>
                    <label className="char__search-label" htmlFor="charName">Or find character by name: </label>
                    <div className="char__search-wrapper">
                        <Field 
                            id="charName"
                            name="charName"
                            type="text"
                            placeholder="Enter name"
                        />
                        <button type='submit' className='button button__main' disabled={process === 'loading'}>
                            <div className="inner">find</div>
                        </button>
                    </div>
                    <FormikErrorMessage component="div" className="char__search-error" name="charName"/>
                </Form>
            </Formik>
            {results}
            {errorMessage}
        </div>
    );
}

export default CharSearchForm;
