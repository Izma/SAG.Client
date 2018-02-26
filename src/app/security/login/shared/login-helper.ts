import { IMessageInfo } from './message-info';

export class LoginHelper {

    /**
     * Método que regresa un objecto de tipo IMessageInfo con el mensaje y el tipo para la alerta
     */
    public displayMessage(result: string): IMessageInfo {
        const info: IMessageInfo = { message: '', type: '' };
        if (result === 'PASSWORD_WRONG') {
            info.message = 'La contraseña es incorrecta!';
            info.type = 'danger';
        } else if (result === 'EMAIL_WRONG') {
            info.message = 'El correo electrónico no existe!';
            info.type = 'danger';
        } else {
            info.message = 'Su token fue generado exitosamente';
            info.type = 'success';
            sessionStorage.setItem('token', result);
        }
        return info;
    }

}
