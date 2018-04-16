import React from 'react';
import ReactTable from 'react-table'
import {Checkbox} from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import ModalEdit from './components/ModalEditTree'
import ModalConfirm from 'app/utils/modal/Modalconfirm'
// import "react-table/react-table.css";
// import ModalEdit from './components/ModalEditTree'
class ListGroupTree extends React.Component {
    state = {
        Data: []
    };
    componentDidMount() {
        var that = this;
        axios.post('/role/getall'
        ).then(res => {
            that.setState({ Data: res.data });
        });
    }

    render() {

        var Data = this.state.Data,
            MakeItem = function (X, index) {
                return <option value={X.rolecode} key={index}>{X.rolename}</option>;
            };


        return (
            <select
                onChange={event => this.props.onChange(event.target.value)}
                style={{ width: "100%" }}
                value={this.props.filter ? this.props.filter.value : "Tất cả"}>
                <option></option>
                {Data.map(MakeItem)}
            </select>
        )

    }
}
class QuyDangKy extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          pages: null,
      
          // loading: false,
          data: [],
          checkedAll: false,
          checkboxChecked: false,
          selectedRows: new Set(),
          unSelectedRows: []
          ,
        
        
         
          
          pagesize: 10,
          keySearch: {},
          sortSearch: {},
          page: 1,
          showModalEdit:null,
          dataEdit:{},
          action:'insert',
          showModalConfirm:false
        }
        this.fetchData = this.fetchData.bind(this);

    }
    add(){
        this.setState({showModalEdit: true,action:'insert'})
    }
    close(){
        this.setState({showModalEdit:false,dataEdit:{} })
    }
    fetchData(state, instance) {
      // Whenever the table model changes, or the user sorts or changes pages, this method gets called and passed the current table model.
      // You can set the `loading` prop of the table to true to use the built-in one or show you're own loading bar if you want.
      var that = this;
      // this.setState({ loading: true });
       console.log('page',state.page);
      // console.log('filer',state.filtered);
      // console.log('sort',state.sorted);
      // Request the data however you want.  Here, we'll use our mocked service we created earlier
      // if (this.state.loading) {
      //     let { pageSize, page, filtered, sorted } = state;
      //     this.loadData(pageSize, page + 1, filtered, sorted);
      // }
      // this.setState({ loading: true })
      axios.post('/user/getlist', { pagesize: state.pageSize, page: state.page + 1, keySearch: state.filtered, sortSearch: state.sorted }).then((resData)=>{

              // Now just get the rows of data to your React Table (and update anything else like total pages or loading)
            if(resData.data.EC==0)
                that.setState({
                  data: resData.data.DT.data,
                  pages: resData.data.DT.numOfPages,
              });
            else{
              
            }


      });
  }
    handleEdit(username){
        this.setState({
            dataEdit: this.state.data.filter(e => e.username === username)[0],
            action: 'update',
            showModalEdit: true
          })
    }
    onRowClick(state, rowInfo, column, instance) {
        var that = this
        return {
            onDoubleClick: e => {
            },
            style: {
                background: rowInfo == undefined ? '' : that.state.selectedRows.has(rowInfo.original.username) ? '#dbe1ec' : '',
                color: rowInfo == undefined ? '' : that.state.selectedRows.has(rowInfo.original.username) ? 'black' : '',
            }

        }
    }
    handleChangeAll = (event) => {
        this.setState({ checkedAll: event.target.checked })
        if (event.target.checked) {
            this.state.data.map((element) => {
                if (!this.state.selectedRows.has(element.username)) {
                    this.state.unSelectedRows.push(element.username)
                    this.state.selectedRows.add(element.username)
                }
            })
            this.setState({ selectedRows: this.state.selectedRows, unSelectedRows: this.state.unSelectedRows })
        }
        else {
            this.state.unSelectedRows.map((element) => {
                this.state.selectedRows.delete(element)
            })
            this.setState({ selectedRows: this.state.selectedRows, unSelectedRows: [] })
        }
    }
    handleChangeRow = (row) => {
        // console.log("row original", row.original);
        if (!this.state.selectedRows.has(row.original.username))
            this.state.selectedRows.add(row.original.username);
        else {
            this.state.selectedRows.delete(row.original.username);
        }
        this.setState({ selectedRows: this.state.selectedRows });
    }
   
    delete = () => {
        this.state.selectedRows.forEach((key, value, set) => {
            let data = this.state.data.filter(e => e.username === value);
            let success = null;
            axios.post('/user/delete', data[0])
                .then(res => success = res.data.EC)
                .then(() => {
                    success ? toast.error("Xóa "+ value+ "thất bại"+res.data.DT , { position: toast.POSITION.BOTTOM_RIGHT })
                        : toast.success("Xoá "+value+"quỹ thành công !", { position: toast.POSITION.BOTTOM_RIGHT });
                })
        })
        this.setState({showModalConfirm:false, selectedRows: new Set(),
            unSelectedRows: []})
    }
    closeModalConfirm(){
        this.setState({showModalConfirm:false})
    }
    showModalConfirm(){
        this.setState({showModalConfirm:true})
    }
    render() {
        const pageSize = 5;
        const { data, pages,pagesize, loading } = this.state;      
          var that = this;
        return (
          <div style={{ padding: "10px" }} className="container panel panel-default">
          <div className="title-content">Quản lý người dùng</div>
          <div className="body-content">
            <div className="col-md-12" style={{  padding: "10px 10px 10px 0px"}}>
            {this.props.access == "view" ? null:
                <div className="" style={{}}>
                    <button onClick={this.add.bind(this)} className="btn btn-info" ><span className="glyphicon glyphicon-plus-sign"></span> Thêm</button>
                    {this.state.selectedRows.size>0?<button className="btn btn-danger" onClick={this.showModalConfirm.bind(this)}><span className="glyphicon glyphicon-remove"></span> Xoá</button>:<button disabled className="btn btn-danger" ><span className="glyphicon glyphicon-remove"></span> Xoá</button>}
                </div>}
                <div className="content-left">
                    <ReactTable 
                        columns={[
                            {
                                Header: props => <div>
                                    <Checkbox checked={that.state.checkedAll}
                                        style={{ marginBottom: "17px", textAlign:"center"}}
                                        onChange={that.handleChangeAll.bind(that)}
                                        inline />

                                </div>,
                                maxWidth: 70,
                                sortable: false,
                                style: { textAlign: 'center' },
                                Cell: (row) => (
                                    <div>
                                        <Checkbox
                                            style={{ textAlign: "center", marginLeft: "-16px", marginTop: "-20px", marginRight: "20px" }}
                                            checked={that.state.selectedRows.has(row.original.username)}
                                            onChange={that.handleChangeRow.bind(that, row)}
                                            inline
                                        />
                                       <span onClick={that.handleEdit.bind(that, row.original.username)} className="glyphicon glyphicon-pencil"></span>
                                    </div>
                                ),
                                Filter: ({ filter, onChange }) =>
                                    null
                            },
                            {
                                Header: props => <div className="">Tên đăng nhập</div>,
                                id: "username",
                                accessor: "username",
                                width:150,
                                Cell: ({ value }) => {
                                    return (
                                        <span className="col-left">
                                            {value}
                                        </span>)
                                }
                            },
                            {
                                Header: props => <div className="">Avatar</div>,
                              
                                sortable: false,
                                accessor: "url_avatar",
                                width:70,
                                Cell: ({ value }) => {
                                  return (
                                      <span style={{textAlign:"center"}} >
                                         <img style={{width:"36px",borderRadius:"3px",height:"34px"}} src={value?value:'images/user/me.png'} />
                                      </span>)
                              }
  
                             
                           
                             },
                        //     {
                        //         Header: props => <div className="">Url ảnh cây toàn cục</div>,
                        //         id: "url_image_gobal",
                        //         width:300,
                        //         accessor: "url_image_gobal",
                        //         Cell: ({ value }) => {
                        //           return (
                        //               <span className="col-left">
                        //                   {value}
                        //               </span>)
                        //       }

                        //    },
                           
                            {
                                Header: props => <div className="">Họ tên</div>,
                                id: "fullname",
                                accessor: "fullname",
                                Cell: ({ value }) => {
                                    return (
                                        <span className="col-left">
                                            {value}
                                        </span>)
                                }
                            },
                            {
                                Header: props => <div className="">Chức vụ</div>,
                                id: "rolecode",
                                accessor: "rolename",
                                width:150,
                                Cell: ({ value }) => {
                                    return (
                                        <span className="col-left">
                                            {value}
                                        </span>)
                                },
                            
                                Filter: ({ filter, onChange }) =>

                                <ListGroupTree onChange={onChange} filter={filter} />


                                
                            },
                            {
                                Header: props => <div className="">Trạng thái</div>,
                                id: "status",
                                accessor: "status",
                                width:150,
                                Cell: ({ value }) => {
                                  return (
                                      <span className="col-left">
                                          {value}
                                      </span>)
                              },
                            },
                            {
                              Header: props => <div className="">Địa chỉ</div>,
                              id: "address",
                              accessor: "address",
                              Cell: ({ value }) => {
                                return (
                                    <span className="col-left">
                                        {value}
                                    </span>)
                            }
                          }
                        ]}
                        
                        getTheadTrProps= {() =>{
                            return{
                               className:'head'
                            }
                        }}
                        manual
                        filterable
                        pages={pages} // Display the total number of pages
                        // loading={loading} // Display the loading overlay when we need it
                        onFetchData={this.fetchData}

                        

                        style={{
                            maxHeight: "600px" // This will force the table body to overflow and scroll, since there is not enough room
                        }}
                        getTrProps={this.onRowClick.bind(this)}
                        data={data}
                        defaultPageSize={pagesize}
                        className="-striped -highlight"
                        loadingText="Đang tải..."
                        pageText='Trang'
                        nextText='Tiếp'
                        previousText='Trước'
                        rowsText='bản ghi'
                    />
                </div>
                </div>
            </div>
            <ModalConfirm access={this.delete} show={this.state.showModalConfirm} close={this.closeModalConfirm.bind(this)} />

            <ModalEdit action={this.state.action} dataEdit={this.state.dataEdit} open={this.state.showModalEdit} close={this.close.bind(this)} />
            </div>
        );
    }
}

export default QuyDangKy;