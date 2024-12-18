
import { useForm } from "react-hook-form";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("render");

  const submit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <input
            minLength={3}
            {...register("userName", {
              required: "bu fild majburiy",
              minLength: {
                value: 3,
                message: "eng kam qiymat 3 ta",
              },
              maxLength: {
                value: 6,
                message: "6 tadan ko'p bratiska",
              },
            })}
            type="text"
          />
          {errors.userName ? (
            <p style={{ color: "red" }}>{errors.userName.message}</p>
          ) : (
            ""
          )}
        </div>
        <input {...register("password", { required: true })} type="password" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
