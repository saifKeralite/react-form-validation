import React from 'react'
import { useForm, useState } from "react-hook-form";


function Form() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                    <div className="col">
                        <input type="text" name="name" className="form-control" placeholder="Name" ref={register({ required: true })} />
                        {errors.name && (<div className="invalid-feedback">
                            This is required.
                        </div>)}
                    </div>
                    <div className="col">
                        <input type="text" name="username" className="form-control" placeholder="User Name" ref={register({ required: true })} />
                        {errors.username && (<div className="invalid-feedback">
                            Lastname required.
                        </div>)}
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="email" name="email" className="form-control" placeholder="Email" ref={register({ required: true })} />
                        {errors.email && (<div className="invalid-feedback">
                            Email required.
                        </div>)}
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="date" name="date" className="form-control" placeholder="Date of birth" ref={register({ required: true })} />
                        {errors.date && (<div className="invalid-feedback">
                            DOB required.
                        </div>)}
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="text" name="phone" className="form-control" placeholder="Phone" ref={register({ required: true })} />
                        {errors.phone && (<div className="invalid-feedback">
                            Phone required.
                        </div>)}
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="password" name="password" className="form-control" placeholder="Password" ref={register({ required: true })} />
                        {errors.password && (<div className="invalid-feedback">
                            A password required.
                        </div>)}
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" name="checkfield" type="checkbox" id="gridCheck" ref={register({ required: true })} />
                        <label className="form-check-label" htmlFor="gridCheck" >
                            Accept  <a href="#">Terms of Service, Privacy Policy</a>
                        </label>
                        {errors.checkfield && (<div className="invalid-feedback">
                            You have to agree the Terms and Policy.
                        </div>)}
                    </div>
                </div>
                <input type="submit" className="btn btn-danger" value="Sign up" />
            </form>
        </div>
    )
}

export default Form
