import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";


export default function errorMessage() {
  error({
    text:
      "Обнаружено слишком много совпадений. Введите более специфичный запрос",
    delay: 2000,
  });
}