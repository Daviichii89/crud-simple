import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
    it('Render the App component', () => {
      render(<App />)
      
      expect(screen.getByText('No hay tareas')).toBeInTheDocument();
    })
    it('Click the button Agregar', () => {
      const onSubmit = jest.fn();
      const {getByTestId} = render(<App onSubmit={onSubmit}/>);
      fireEvent.submit(getByTestId("form"))
      // falta el mock para ejecutar la funcion del boton 
      expect(onSubmit).toHaveBeenCalled(1)
      /*
      const addButton = screen.getByText('Agregar');
      expect(addButton).toBeInTheDocument();
      userEvent.click(addButton);
      */
      //expect(submitForm);
    })
});