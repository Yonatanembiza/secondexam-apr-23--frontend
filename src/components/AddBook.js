

import './NewProduct.css';

const AddBook = (props) => {


    const AddHandler = () => {

    }

    return (
        <div className="NewProduct">

            <form onSubmit={AddHandler}>
                <h1>Add a Book</h1>

                <label>Title</label>
                <input type="text"
                    label={'title'}
                    name={'title'}
                />

                <label>Price</label>
                <input type="text"
                    label={'price'}
                    name={'price'}
                />

                <label>Category</label>
                <input type="text"
                    label={'category'}
                    name={'category'}
                />

                <label>Author/s</label>
                <input type="text"
                    label={'authors'}
                    name={'authors'}
                />
                <button>Add Book </button>

                <br /><br /><br />

                <div className="Spec" >
                    <button > cancel</button>
                </div>

            </form>

        </div>
    );

}

export default AddBook;