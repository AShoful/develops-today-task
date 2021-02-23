import { useState } from 'react';
import styled from 'styled-components';

import { Layout } from "../../../Layout/Layout";
import { fetchAddPost } from "../../../redux/actions/actionCreator";

export default function AddPost (): JSX.Element{

  const [body, setText] = useState('');
	const [title, setTitle] = useState('');

  const submite = (e) => {
    e.preventDefault();
    const post = {title, body};
    fetchAddPost(post);
    setText('');
    setTitle('');
  };  

  return <Layout title = "Add post"> 
    <Form >
			<fieldset >
        <legend >Add Post</legend>
          <div>
            <input
              value={title}
              placeholder="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea 
              placeholder="body"
              value={body}
              rows={4}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div>
            <button 
              disabled={!title || !body} 
              onClick={submite}>
                Save
            </button>
          </div>
        </fieldset>	
			</Form>
    </Layout>
};

const Form = styled.form`
{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 95%;
  margin: 5px auto;
  padding: 20px;
  background-color: #ffffff;
}

 fieldset {
  border: none
}

 fieldset legend {
  font-weight: 600;
}

input,
textarea {
  padding: 15px;
  width: 95%;
  margin: 15px auto;
  border: 1px solid black;
}

input {
  height: 25px
}

button {
  width: 99%;
  padding: 10px 0;
  cursor: pointer;
  font-weight: 500;
  background-color: darkblue;
  color: #fff;
  font-size: 25px
}

button:disabled {
  background: #ccc;
  color: #000;
  cursor: not-allowed;
}
`