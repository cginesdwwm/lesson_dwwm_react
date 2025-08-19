import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";

export default function Homepage() {
  return (
    <>
      <div>
        <Button color="primary" text="S'abonner" />
        <Button color="secondary" text="Valider" />
      </div>
      <div>
        <Input type="text" />
        <Input type="password" />
      </div>
    </>
  );
}
