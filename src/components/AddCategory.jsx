import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if ( inputValue.trim().length <= 1 ) return; // Condicion para verificar que no se envie un string vacio en el formulario

        onNewCategory( inputValue.trim() );
        setInputValue('');
    }
    return (
        // <form onSubmit={ (event) => onSubmit(event) }> 
        <form onSubmit={ onSubmit }> 
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    )
}
