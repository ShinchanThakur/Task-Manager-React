import styles from './NewTaskForm.module.css';

function NewTaskForm() {
    return (
        <form className={styles.form}>
            <input type="text"></input>
            <button>Add Task</button>
        </form>
    );
};

export default NewTaskForm;