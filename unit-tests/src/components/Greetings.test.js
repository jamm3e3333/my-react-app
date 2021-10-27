import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greetings from './Greetings';

describe('Greetings component', () => {
    test('Find the greeting element.', () => {
        //Arrange
        render(<Greetings />)
    
        //Act
    
        //Assert
        const helloWorldElement = screen.getByText('Hello World', {exact: false}); 
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('Should find the paragraph.', () => {
        render(<Greetings />);

        const goodToSeeYouElement = screen.getByText('It\'s good to see you!', {exact: false});
        expect(goodToSeeYouElement).toBeInTheDocument();
    });

    test('Should click the button ', () => {
        render(<Greetings />);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const changedElement = screen.getByText('Changed!', {exact: false});
        expect(changedElement).toBeInTheDocument();
    });

    test('Element is unvisible after click.', () => {
        render(<Greetings />);
        
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const changedElement = screen.queryByText('It\'s good to see you!', {exact: false});
        expect(changedElement).toBeNull();

    })
})