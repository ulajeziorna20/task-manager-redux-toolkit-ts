import { initialTask } from "../../slices/taskSlice";
import './editTask.scss'



type Props = {
  editTask: (e: React.FormEvent<HTMLFormElement>, content: string, id: string) => void,
  setEditContent: (string: string) => void,
  editContent: string,
  item: initialTask,
  setShowEditModal: (boolean: Boolean) => void,
}



const EditTask = (props: Props) => {
  return (
    <div className="editModal">
      <h3>Write your changes here </h3>
      <span onClick={() => props.setShowEditModal(false)}>X</span>

      <form className="editForm" onSubmit={(e: React.FormEvent<HTMLFormElement>) => props.editTask(e, props.editContent, props.item._id)}>
        <input
          type='text'
          name='changeTask'
          className="changeTask"
          placeholder='change your task...'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.setEditContent(e.target.value)}
          value={props.editContent}
        />
        <button className='button edit'>Change Task </button>
      </form>
    </div>
  );
}

export default EditTask;