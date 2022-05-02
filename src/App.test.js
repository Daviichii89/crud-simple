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
      const mockHandler = jest.fn();
      render(<App agregarTarea={mockHandler}/>);

      /*
      const addButton = screen.getByText('Agregar');
      expect(addButton).toBeInTheDocument();
      userEvent.click(addButton);
      */
      const submitForm = (screen.getByTestId("form"));
      //expect(submitForm);
      fireEvent.submit(submitForm)

      // falta el mock para ejecutar la funcion del boton
      expect(mockHandler.mock.calls).toHaveLength(1); 
    })
});