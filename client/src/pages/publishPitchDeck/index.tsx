import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import clsx from 'clsx';
import useCreatePitchDeck from 'utils/hooks/api/useCreatePitchDeck';
import { BaseComponentProps } from 'utils/types/baseComponent';

import Button from 'components/button';
import FileInput from 'components/fileInput';
import Header from 'components/header';
import Text from 'components/text';
import TextInput from 'components/textInput';

import styles from './styles.module.scss';

type CompanyRegistrationForm = {
  companyName: string;
  file?: File;
};

type Props = {} & BaseComponentProps;

PublishPitchDeck.defaultProps = {};

function PublishPitchDeck(props: Props) {
  const { containerStyle } = props;
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState('');
  const [file, setFile] = useState<File>();
  const { mutate, isLoading, error, isSuccess } = useCreatePitchDeck();

  const onFileSelected = (selectedFile?: File) => setFile(selectedFile);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: CompanyRegistrationForm = { companyName, file };
    if (!file) {
      toast('Please select a file', { toastId: 'missing-file' });
      return;
    }
    mutate({ companyName: data.companyName, file });
  };

  useEffect(() => {
    if (isSuccess) {
      toast('Pitch published successfully');
      navigate('/');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (error) {
      toast('Something went wrong, please try again', { type: 'error' });
      console.error(error);
    }
  }, [error]);

  return (
    <main className={clsx([styles.publishPitchDeckContainer, containerStyle])}>
      <Header title='' backButton />
      <Text variant='title'>Complete your company information</Text>
      <form className={styles.formContainer} onSubmit={onSubmit}>
        <TextInput
          required
          placeholder='Company Name'
          onChange={(ev) => setCompanyName(ev.target.value)}
        />
        <FileInput onFileSelected={onFileSelected} />
        <div className={styles.buttonGroup}>
          <Button
            loading={isLoading}
            containerStyle={styles.button}
            label='Submit'
            buttonProps={{ type: 'submit' }}
          />
        </div>
      </form>
    </main>
  );
}

export default PublishPitchDeck;
