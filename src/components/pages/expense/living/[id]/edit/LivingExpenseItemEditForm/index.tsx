// eslint-disable-next-line import/named
import { EmojiClickData } from "emoji-picker-react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Controller, SubmitHandler } from "react-hook-form";
import { useDefaultForm } from "src/react-hook-form/useDefaultForm";

const Picker = dynamic(
  () => {
    return import("emoji-picker-react");
  },
  { ssr: false }
);

type LivingExpenseItemEditFormValues = {
  title: string;
  explanation: string;
  emoji: string;
  cost: string;
  // breakdown: {

  // }[]
  memo: string;
  lastEdited: string;
};

const LivingExpenseItemEditForm = () => {
  const { register, handleSubmit, control } =
    useDefaultForm<LivingExpenseItemEditFormValues>({
      defaultValues: {
        title: "string",
        explanation: "string",
        emoji: "string",
        cost: "string",
        memo: "string",
        lastEdited: "string",
      },
    });

  const onSubmit: SubmitHandler<LivingExpenseItemEditFormValues> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  const [emojiData, setEmojiData] = useState<any>({
    activeSkinTone: "neutral",
    emoji: "😇",
    names: [""],
    originalUnified: "",
    unified: "",
  });

  const handleEmojiClick = (emoji: EmojiClickData, event: MouseEvent) => {
    setEmojiData(emoji);
    console.log(emoji);
    console.log(emoji.emoji);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>title</label>
        <input {...register("title")} />
        <label>explanation</label>
        <input {...register("explanation")} />
        <label>cost</label>
        <input {...register("cost")} />
        <label>memo</label>
        <input {...register("memo")} />
        <label>lastEdited</label>
        <input {...register("lastEdited")} />
        <div>
          <div>{emojiData.emoji}</div>

          <Controller
            control={control}
            name="emoji"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Picker onEmojiClick={onChange} />
            )}
          />
        </div>
        <button>保存</button>
      </form>
    </div>
  );
};

export default LivingExpenseItemEditForm;
