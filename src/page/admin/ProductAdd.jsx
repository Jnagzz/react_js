import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const ProductAdd = () => {
    const { register, handleSubmit, formState: { error } } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (formData) => {
        await axios.post(`http://localhost:3000/products`, formData);
        alert('them thanh cong');
        navigate("/admin/products");
    }
    // const [inputValue, setInputValue] = useState({});
    // const onHandleChange = (e) => {
    //     const { name, value } = e.target;
    //     setInputValue({ ...inputValue, [name]: value });
    // };
    // const onHandleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!inputValue) return;
    //     fetch(`http://localhost:3000/products`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(inputValue),
    //     });
    // };
    return (
        <div>
            <header className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Thêm sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link to="/admin/products">
                            <button type="button" className="btn btn-outline-primary">
                                Quay lại
                            </button>
                        </Link>
                    </div>
                </div>
            </header>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Tên sản phẩm
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Sản phẩm A"
                        {...register("name", { required: true, minLength: 5 })}
                    />
                    {error?.name?.type === 'required' && (
                        <span className="text-danger tw-mt-2 tw-block">
                            Tên sản phẩm không được để trống
                        </span>
                    )}
                    {error?.name?.type === 'minLength' && (
                        <span className="text-danger tw-mt-2 tw-block">
                            Tên sản phẩm không được ít hơn 5 kí tự
                        </span>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Giá sản phẩm
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="$200"
                        {...register("price", { required: true, min: 0 })}
                    />
                    {error?.price?.type === 'required' && (
                        <span className="text-danger tw-mt-2 tw-block">
                            Giá sản phẩm không được để trống
                        </span>
                    )}
                    {error?.price?.type === 'min' && (
                        <span className="text-danger tw-mt-2 tw-block">
                            Giá sản phẩm không được nhỏ hơn 0
                        </span>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Tình trạng
                    </label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            value={true}
                            id="flexRadioDefault1"
                            defaultChecked
                            {...register("inStock")}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Còn hàng
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            value={false}
                            id="flexRadioDefault2"
                            {...register("inStock")}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Hết hàng
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Ảnh sản phẩm
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("imageUrl")}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Mô tả sản phẩm
                    </label>
                    <textarea
                        className="form-control"
                        rows={4}
                        {...register("description")}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" type="submit">
                        Thêm mới
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProductAdd;