import { useForm } from "react-hook-form";
import { PcToastProps } from "@/components/toasts/pc-toast";
import useToast from "libs/clients/useToast";

export default function ToastTest() {
  const { register, handleSubmit, reset } = useForm<PcToastProps>();
  const { addToast } = useToast();
  const isFormValid = ({ title, message }: PcToastProps) => {
    reset();

    // add new toast.
    addToast({ title, message });
  };

  return (
    <div>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(isFormValid)}
      >
        <input
          className="border"
          {...register("title", {
            required: "Title is required.",
          })}
          type="text"
        />
        <input
          className="border"
          {...register("message", {
            required: "Message is required.",
          })}
          type="text"
        />
        <button className="border" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
