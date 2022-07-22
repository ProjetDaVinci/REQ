import { type } from "os";
import { FC, useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import styles from "./FormAdd.module.css";

import React from "react";

import Select from "react-select";
import Creatable from "react-select/creatable";
import { selectors, thunks } from "../../redux/ducks";
import CreatableEditableSelect, {
  CreatableEditableSelectOption,
  CreatableEditableSelectValue,
} from "./CreatableEditableSelect";
import { Exit } from "../../icons";

const options: CreatableEditableSelectOption[] = [];
type FormRes = {
  nameKey: string;
};

type FormModal = {
  setIsVisible: (item: boolean) => void;
};
const FormAdd: FC<FormModal> = ({ setIsVisible }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [mass, setMass] = useState<CreatableEditableSelectOption[]>([]);

  const [valueFind, setValueFind] = useState<CreatableEditableSelectValue[]>(
    []
  );
  const [valueStop, setValueStop] = useState<CreatableEditableSelectValue[]>(
    []
  );
  const [selectedOptions, setSelectedOptions] = useState<
    CreatableEditableSelectOption[]
  >([]);

  const onSubmit = ({ nameKey }: FormRes) => {
    let options: string[] = [];
    let stopword: string[] = [];
    let findword: string[] = [];
    selectedOptions.map((item) => options.push(item.value));
    valueFind.map((item) => findword.push(item.value));
    valueStop.map((item) => stopword.push(item.value));

    dispatch(
      thunks.keys.addKeys({
        name: nameKey,
        stopword: stopword.join(),
        word: findword.join(),
        exclude: options.join(),
        company_id: 1,
      })
    );
    setIsVisible(false);
  };

  const telegramAkk = useSelector(selectors.telegramAkk.SelectTelegram);

  useEffect(() => {
    dispatch(thunks.telegramAkk.getListTelegram());
    for (let i = 0; i < telegramAkk.length - 1; i++) {
      const newObj = {
        value: telegramAkk[i].name,
        label: telegramAkk[i].name,
      };
      setMass((prevState) => [...prevState, newObj]);
    }
  }, []);

  const handleChange = (options: any) => {
    setSelectedOptions(options);
  };

  return (
    <div className="text-black">
      <div className={styles.modal_header}>
        <p className={styles.hedder_text}>Добавление ключевика</p>
        <Exit onClick={() => setIsVisible(false)} fill="black" />
      </div>
      <div className={styles.modal_body}>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form }) => (
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Field name="nameKey">
                {({ input, meta }) => (
                  <div className={styles.input_column}>
                    Наименование
                    <input
                      {...input}
                      type="text"
                      placeholder="Наименование"
                      className={`${styles.form_input} mt-2`}
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="words">
                {({ input, meta }) => (
                  <div className={styles.input_column}>
                    Слова, который мы ищем
                    <CreatableEditableSelect
                      options={options}
                      value={valueFind}
                      onChange={setValueFind}
                    />
                  </div>
                )}
              </Field>
              <Field name="nameKey">
                {({ input, meta }) => (
                  <div className={styles.input_column}>
                    Стоп слова
                    <CreatableEditableSelect
                      options={options}
                      value={valueStop}
                      onChange={setValueStop}
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="nameKey">
                {({ input, meta }) => (
                  <div className={styles.input_column}>
                    Исключить каналы
                    <Select
                      options={mass}
                      isMulti={true}
                      closeMenuOnSelect={false}
                      onChange={handleChange}
                      placeholder={"Выберите каналы, которые нужно исключить"}
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <button
                type="submit"
                // disabled={submitting}
                className="btn mt-4 bg-gradient-primary w-100"
                onClick={handleSubmit}
              >
                Добавить
              </button>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default FormAdd;
