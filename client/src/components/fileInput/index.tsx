import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FileIcon, RemoveIcon } from 'assets/icons';
import clsx from 'clsx';
import { useIsMobile } from 'utils/hooks/useIsMobile';
import { BaseComponentProps } from 'utils/types/baseComponent';

import styles from './styles.module.scss';

type Props = {
  onFileSelected?: (file?: File) => void;
} & BaseComponentProps;

function FileInput(props: Props) {
  const { containerStyle, onFileSelected } = props;
  const [selectedFile, setSelectedFile] = useState<File>();
  const isMobile = useIsMobile();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setSelectedFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    noClick: !!selectedFile,
    accept: {
      'application/pdf': [],
      'application/vnd.ms-powerpoint': [],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation':
        [],
    },
  });

  useEffect(() => {
    if (typeof onFileSelected === 'function') {
      onFileSelected(selectedFile);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFile]);

  return (
    <div className={clsx([styles.fileInputContainer, containerStyle])}>
      <div
        className={clsx([styles.innerContainer, 'clickable'])}
        {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={styles.message}>
          {!selectedFile ? (
            isDragActive ? (
              <p>Drop your file here!</p>
            ) : isMobile ? (
              <p>Press here to select a file</p>
            ) : (
              <p>
                Drag and drop your pitch deck here.
                <br />
                <small>You could also click here to select a file</small>
              </p>
            )
          ) : (
            <div className={styles.fileLabel}>
              <div>
                <FileIcon />
              </div>
              <span>{selectedFile.name}</span>
              <div onClick={() => setSelectedFile(undefined)}>
                <RemoveIcon />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FileInput;
