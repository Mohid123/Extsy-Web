import  Swal from "sweetalert2";

export const fireSwal = (title:string,text:string,type:string) => {    
    // let icon = type ? "success" : "error";
Swal.fire({
    title: title,
    text:text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
 };

  
  