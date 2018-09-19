import {
  $axios
} from '../until/until.js'
import store from '../store/index'
import router from '../router'
const selfmethod = {
  //获取所有的分类、传入需要赋值的参数调用完成后的数据放入vuex中
  getalltype() {
    let pn = 1;
    let typearr = [];

    function gettype(pn) {
      $axios.get("/category", {
        pn: pn,
        size: 10
      }).then(res => {
        if (res.data.length == 0) {
          store.commit("GETALLTYPES", typearr);
        } else {
          typearr = [...typearr, ...res.data];
          pn++;
          gettype(pn);
        }
      });
    }
    gettype(pn);
  },
  //获取所有的书籍, 同时将所有的书籍列表放到vuex当中
  getbooks() {
    let pn = 1;
    let allbook = [];

    function getallbook(pn) {
      $axios.get("/book", {
        pn: pn,
        size: 10
      }).then(res => {
        if (res.data.length == 0) {
          store.commit("GETALLBOOKS", allbook);
        } else {
          allbook = [...allbook, ...res.data];
          pn++;
          getallbook(pn);
        }
      });
    }
    getallbook(pn);
  },
  //获取所有的轮播图
  getallswiper() {
    let allswiper = [];
    let pn = 1;

    function getsw(pn) {
      $axios.get("/swiper", {
        pn: pn,
        size: 10
      }).then(res => {
        if (res.data.length == 0) {
          store.commit('GETALLSWIPER', allswiper)
        } else {
          allswiper = [...allswiper, ...res.data];
          pn++;
          getsw(pn);
        }
      });
    }
    getsw(pn);
  },
  //查看书籍详情

  getbookdetail(id) {
    router.push({
      path: 'bookdetail',
      query: {
        id: id
      }
    })

  }
}
export default selfmethod;
