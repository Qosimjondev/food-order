const Form = () => {
    return (
        <form>
            <div class="mb-3">
                <label for="exampleForm" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleForm" placeholder="Your name..." />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                <input type="tel" class="form-control" id="exampleFormControlInput1" placeholder="+998 xx xxx xx xx" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Send</button>
            </div>
        </form>

    );
}

export default Form;