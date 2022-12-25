/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import Image from "next/image";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  clearBasket,
  selectItems,
  selectTotal,
  selectTotalVAT,
} from "../../slices/basketSlice";
import { PostProductsType, ProductType } from "../../utils/types";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import InputField from "../common/InputField/InputField";

type Props = {};

export default function CheckoutPage({}: Props) {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const totalVat = useSelector(selectTotalVAT);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const [products, setProducts] = useState<PostProductsType[]>([]);

  useEffect(() => {
    prods();
  }, []);

  const prods = () => {
    let copyArr: PostProductsType[] = [];
    items.map((item: ProductType) => {
      let i = {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity_available,
        vat: item.vat,
        addon: {
          name: "",
          price: 0,
        },
      };

      item.addons.map((option) => {
        if (option.is_default) {
          i.addon = {
            name: option.name,
            price: option.price,
          };
        }
      });
      copyArr.push(i);
    });
    setProducts(copyArr);
  };

  useEffect(() => {
    // console.log(products);
  }, [products]);

  const changeAddons = (id: number, addon: { name: string; price: number }) => {
    let copy_arr = [...products];
    copy_arr[id].addon = addon;
    setProducts(copy_arr);
  };

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let reqBody = {
      customer: {
        name: name,
        address: address,
        phone: phone,
      },
      items: products,
      calculation: {
        price: total,
        vat: totalVat,
        total: total + totalVat,
      },
    };
    const headers = {
      "x-access-user": email,
    };
    axios.defaults.baseURL = "/";
    await axios
      .post(`https://munchies-api.up.railway.app/order/`, reqBody, {
        headers: headers,
      })
      .then((res) => {
        toast.success("Order Placed SuccessFully", {
          position: toast.POSITION.TOP_CENTER,
        });
        dispatch(clearBasket());

        // console.log(res.data)
      })
      .catch((e) => console.log(e.response.data));
  };

  return (
    <div className="max-w-[1440px] mx-auto min-h-screen bg-[#F7F8FA] flex flex-col">
      <div className="bg-[#0C1712] text-white px-[108px]">
        <Header />
      </div>
      <div className="mt-10 bg-white rounded shadow-sm p-[108px] m-10 flex-1">
        <p
          className={`sf text-2xl font-semibold leading-5 tracking-tight ${
            items.length === 0 && "text-center"
          }`}
        >
          Your Cart {items.length === 0 && "is empty"}
        </p>
        <div className="mt-10 space-y-10">
          {items.map((item: ProductType, idx: number) => {
            return (
              <div key={idx} className="flex justify-between">
                <div className="flex space-x-6">
                  <div className="flex items-center justify-center">
                    <p className="text-xl">{idx + 1}. </p>
                  </div>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="bg-slate-400 rounded-lg w-[120px] h-[120px] object-cover"
                  />
                  <div className="sf flex flex-col justify-between py-4">
                    <p className="text-3xl font-medium">{item.name}</p>
                    <p className="text-base font-medium">
                      ৳ {item.price} + {item.vat} (VAT)
                    </p>
                  </div>
                </div>
                <div className="py-4 w-[200px] mb-10">
                  <p className="text-xl mb-2 border-b">Add Ons</p>
                  <div className="space-y-2">
                    {item.addons?.map((addon, idx2: number) => (
                      <div
                        key={addon.id}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="radio"
                          name={idx.toString()}
                          id=""
                          className="accent-primary-light"
                          checked={addon.is_default}
                          onChange={() =>
                            changeAddons(idx, {
                              name: addon.name,
                              price: addon.price,
                            })
                          }
                        />
                        <p>
                          {addon.name} + ৳{addon.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {items.length !== 0 && (
          <div className="mt-20">
            <form action="" onSubmit={formSubmit}>
              <div className="w-[400px] mx-auto bg-primary-light p-10 rounded-lg">
                <p className="text-center text-2xl font-bold mb-10 text-white">
                  Contact Details
                </p>
                <div className="space-y-6">
                  <InputField placeholder="Your Name" onChange={setName} />
                  <InputField placeholder="Your Phone" onChange={setPhone} />
                  <InputField
                    placeholder="Your Address"
                    onChange={setAddress}
                  />
                  <InputField placeholder="Your Email" onChange={setEmail} />
                  <div className="my-4 flex justify-center items-center">
                    <button
                      type="submit"
                      className="p-4 rounded bg-secondary cursor-pointer text-white"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}

        <div className="mt-20 flex items-center justify-center">
          <button
            className="p-6 rounded bg-primary text-white font-bold"
            onClick={() => {
              Router.push("/orders");
            }}
          >
            Show All Orders
          </button>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
