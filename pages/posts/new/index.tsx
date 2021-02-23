import { useState } from 'react';
import { Layout } from "../../../Layout/Layout";
import { fetchAddPost } from "../../../redux/actions/actionCreator"

export default function AddPost (): JSX.Element{

  const [text, setText] = useState('')
	const [title, setTitle] = useState('')

  const submite = (e) => {
    e.preventDefault()
    const post = {title, text}
    fetchAddPost(post)
    setText('')
    setTitle('')
    
}

  return <Layout title = "Add post"> 
    <form >
			<fieldset >
        <legend >Добавить пост</legend>
          <div>
            <input
              value = {title}
              onChange = {(e) => setTitle(e.target.value)}
            />
            <textarea 
              value = {text}
              onChange = {(e) => setText(e.target.value)}
            />
          </div>
          <div>
            <button 
              disabled = {!title || !text} 
              onClick = {submite}>
                Сохранить
            </button>
          </div>
        </fieldset>	
			</form>
    </Layout>
}

