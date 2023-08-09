import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import client from "../../services/restClient";


const SingleBorrowhistoryPage = (props) => {
    const history = useHistory();
    const urlParams = useParams();
    const [data, setData] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("borrowhistory")
            .get(urlParams.singleBorrowhistoryId, { query: { $populate: [] }})
            .then((res) => {
                setData(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Borrowhistory", type: "error", message: error.message || "Failed get borrowhistory" });
            });
    }, []);

    const goBack = () => {
        history.replace("/borrowhistory");
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Borrowhistory</h3>
                </div>
                <p>borrowhistory/{urlParams.singleBorrowhistoryId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm">User Id</label>
                    <p className="m-0" >{data?.user_id}</p>
                    <label className="text-sm">Book Id</label>
                    <p className="m-0" >{data?.book_id}</p>
                    <label className="text-sm">Borrow Date</label>
                    <p className="m-0" >{data?.borrow_date}</p>
                    <label className="text-sm">Due Date</label>
                    <p className="m-0" >{data?.due_date}</p>
                    <label className="text-sm">Returned Date</label>
                    <p className="m-0" >{data?.returned_date}</p>
                    <label className="text-sm">Fine</label>
                    <p className="m-0" >{data?.fine}</p>
            
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

export default connect(mapState, mapDispatch)(SingleBorrowhistoryPage);
