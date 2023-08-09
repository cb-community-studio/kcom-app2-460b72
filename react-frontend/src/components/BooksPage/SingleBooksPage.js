import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import client from "../../services/restClient";


const SingleBooksPage = (props) => {
    const history = useHistory();
    const urlParams = useParams();
    const [data, setData] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("books")
            .get(urlParams.singleBooksId, { query: { $populate: [] }})
            .then((res) => {
                setData(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Books", type: "error", message: error.message || "Failed get books" });
            });
    }, []);

    const goBack = () => {
        history.replace("/books");
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Books</h3>
                </div>
                <p>books/{urlParams.singleBooksId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm">Id</label>
                    <p className="m-0" >{data?.id}</p>
                    <label className="text-sm">Title</label>
                    <p className="m-0" >{data?.title}</p>
                    <label className="text-sm">Author</label>
                    <p className="m-0" >{data?.author}</p>
                    <label className="text-sm">Publisher</label>
                    <p className="m-0" >{data?.publisher}</p>
                    <label className="text-sm">Publication Date</label>
                    <p className="m-0" >{data?.publication_date}</p>
                    <label className="text-sm">Description</label>
                    <p className="m-0" >{data?.description}</p>
                    <label className="text-sm">Isbn</label>
                    <p className="m-0" >{data?.isbn}</p>
                    <label className="text-sm">Image Url</label>
                    <p className="m-0" >{data?.image_url}</p>
                    <label className="text-sm">Copies Available</label>
                    <p className="m-0" >{data?.copies_available}</p>
                    <label className="text-sm">Total Copies</label>
                    <p className="m-0" >{data?.total_copies}</p>
            
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {};
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleBooksPage);
