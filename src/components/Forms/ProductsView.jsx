import React from "react";

// icons
import { RiCloseLargeLine } from "react-icons/ri";

function ProductPreview({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="container">
      <div className="text-center">
        <h4>Product Preview</h4>
        <div className="d-flex justify-content-end ">
          <RiCloseLargeLine
            size={40}
            className="text-danger cursor-pointer  p-1 "
            onClick={onClose}
          />
        </div>

        <table className="table table-bordered shadow">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{product.productNameEnglish}</td>
            </tr>
            <tr>
              <th>Category</th>
              <td>{product.category?.name}</td>
            </tr>
            <tr>
              <th>Brand</th>
              <td>{product.brand}</td>
            </tr>
            <tr>
              <th>Slug</th>
              <td>{product.productSlug}</td>
            </tr>
            <tr>
              <th>Regular Price</th>
              <td>{product.regularPrice}</td>
            </tr>
            <tr>
              <th>Discount Price</th>
              <td>{product.discountPrice}</td>
            </tr>
            <tr>
              <th>Quantity</th>
              <td>{product.quantity}</td>
            </tr>
            <tr>
              <th>Code</th>
              <td>{product.code}</td>
            </tr>
            <tr>
              <th>Warranty</th>
              <td>{product.warranty}</td>
            </tr>
            <tr>
              <th>Expiry Date</th>
              <td>{product.expiryDate}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{product.Status}</td>
            </tr>
            <tr>
              <th>Featured</th>
              <td>{product.featured}</td>
            </tr>
            <tr>
              <th>Return Policy</th>
              <td>{product.returnPolicy}</td>
            </tr>
            <tr>
              <th>Details</th>
              <td>{product.Details}</td>
            </tr>
            <tr>
              <th>Images</th>
              <td>
                <div className="d-flex flex-wrap">
                  {product.Images?.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Product"
                      style={{
                        width: "80px",
                        height: "80px",
                        marginRight: "10px",
                      }}
                    />
                  ))}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductPreview;
