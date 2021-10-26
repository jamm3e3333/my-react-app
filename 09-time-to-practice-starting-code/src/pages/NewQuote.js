import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
    const addQuoteHandler = quoteDate => {
        console.log(quoteDate);
    }
    return (
        <QuoteForm onAddQuote={addQuoteHandler} />
    )
}

export default NewQuote;