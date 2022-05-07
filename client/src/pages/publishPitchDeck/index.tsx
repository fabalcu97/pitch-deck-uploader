import clsx from 'clsx';
import Button from 'components/button';
import FileInput from 'components/fileInput';
import TextInput from 'components/textInput';
import React, { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { BaseComponentProps } from 'utils/types/baseComponent';
import styles from './styles.module.scss';

type CompanyRegistrationForm = {
  companyName: string;
  file?: File;
};

type Props = {} & BaseComponentProps;

PublishPitchDeck.defaultProps = {};

function PublishPitchDeck(props: Props) {
  const { containerStyle } = props;
  const [companyName, setCompanyName] = useState('');
  const [file, setFile] = useState<File>();

  const onFileSelected = (selectedFile?: File) => setFile(selectedFile);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: CompanyRegistrationForm = { companyName, file };
    if (!file) {
      toast('Please select a file', { toastId: 'missing-file' });
      return;
    }
    console.log({ data });
  };

  return (
    <main className={clsx([styles.publishPitchDeckContainer, containerStyle])}>
      <div className={styles.title}>Complete your company information</div>
      <form className={styles.formContainer} onSubmit={onSubmit}>
        <TextInput
          required
          placeholder='Company Name'
          onChange={(ev) => setCompanyName(ev.target.value)}
        />
        <FileInput onFileSelected={onFileSelected} />
        <div className={styles.buttonGroup}>
          <Button
            containerStyle={styles.button}
            label='Back'
            variant='secondary'
            href='/'
          />
          <Button
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