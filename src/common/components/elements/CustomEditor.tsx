'use client';

import { Editor } from '@tinymce/tinymce-react';
import React from 'react';

interface CustomEditorProps {
  name: string;
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
}

const CustomEditor: React.FC<CustomEditorProps> = ({
  name,
  value,
  onChange,
}) => {
  return (
    <Editor
      apiKey="8mp3g7r5t6ls4ysd6ezhmah6u0lmpahbco5k53la2fzmn0cw"
      value={value}
      init={{
        height: 500,
        menubar: true,
        plugins: [
          'advlist',
          'autolink',
          'lists',
          'link',
          'image',
          'charmap',
          'preview',
          'searchreplace',
          'wordcount',
        ],
        toolbar:
          'undo redo | formatselect | bold italic | alignleft aligncenter alignright | outdent indent | link image',
      }}
      onEditorChange={(content: any) => {
        onChange({ target: { name, value: content } });
      }}
    />
  );
};

export default CustomEditor;
