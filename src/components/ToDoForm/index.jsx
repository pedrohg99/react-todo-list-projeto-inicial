import { Button } from "../Button";
import { TextInput } from "../TextInput";
import "./todo-form.style.css";

export function ToDoForm(props) {
  return (
    <form action={props.onSubmit} className="todo-form">
      <TextInput
        placeholder="Digite o item que deseja adicionar"
        required
        name="description"
      />
      <Button>Salvar item</Button>
    </form>
  );
}
