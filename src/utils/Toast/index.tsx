import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IToast {
  success(message: string): void;
  warn(message: string): void;
  error(message: string): void;
}

const Toast: IToast = {
  success(message: string) {
    toast.success(message);
  }
  , warn(message: string) {
    toast.warn(message);
  }
  , error(message: string) {
    toast.error(message);
  }
}

export default Toast;
