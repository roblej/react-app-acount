import "./ExForm.css"

const ExForm =({handleCharge, charge, amount, handleAmount, handleSubmit, edit})=> {
    return (
      <form onSubmit={handleSubmit}>
        <div className='form-center'>
          <div className='form-group'>
            <label>항목</label>
            <input text="text" className='form-control'
            placeholder="ex) 파프리카"
            id="charge"
            name="charge"
            onChange={handleCharge}
            value={charge}
            ></input>
          </div>
          <div className='form-group'>
            <label>금액</label>
            <input type="number"
            className='form-control'
            placeholder="ex) 5000"
            id="amount"
            value={amount}
            onChange={handleAmount}
            ></input>
          </div>
          <button type="submit" className="btn submit-btn">
          {edit? "수정" : "제출"}
          </button>
        </div>
      </form>
    )
  }

export default ExForm
