(this["webpackJsonp04-practica"] = this["webpackJsonp04-practica"] || []).push([
  [0],
  {
    12: function (e, i, t) {
      "use strict";
      t.r(i);
      var a = t(1),
        c = t.n(a),
        s = t(3),
        d = t.n(s),
        l = (t(8), t(0)),
        m = function () {
          return Object(l.jsxs)("header", {
            className: "header",
            children: [
              Object(l.jsx)("h1", { children: "fr\xfcute" }),
              Object(l.jsx)("small", { children: "tarts unordinary" }),
            ],
          });
        },
        r = function (e) {
          var i = e.title,
            t = e.image;
          return Object(l.jsx)("section", {
            children: Object(l.jsxs)("div", {
              className: "card text-left animate__animated animate__fadeInUp",
              children: [
                Object(l.jsx)("div", {
                  className: "overflow",
                  children: Object(l.jsx)("img", {
                    src: t,
                    alt: i,
                    className: "card__img card-img-top",
                  }),
                }),
                Object(l.jsxs)("div", {
                  className: "card-body",
                  children: [
                    Object(l.jsx)("h4", {
                      className: "card-title subtitle",
                      children: i,
                    }),
                    Object(l.jsx)("p", {
                      className: "card-text text-secondary",
                      children:
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel praesentium commodi ullam nostrum quia mollitia illo ea, deserunt, incidunt ratione eum eaque doloribus eligendi perspiciatis laudantium! Nulla tenetur vel necessitatibus.",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        n = [
          {
            id: 1,
            title: "three berries",
            image:
              t.p + "interface3/interface3/static/media/image1.da418160.jpg",
          },
          {
            id: 2,
            title: "lime meringue",
            image:
              t.p + "interface3/interface3/static/media/image2.8fd981d4.jpg",
          },
          {
            id: 3,
            title: "pecan",
            image:
              t.p + "interface3/interface3/static/media/image3.7b8c91a8.jpg",
          },
          {
            id: 4,
            title: "budino",
            image:
              t.p + "interface3/interface3/static/media/image4.6ee13f58.jpg",
          },
          {
            id: 5,
            title: "creme brulee",
            image:
              t.p + "interface3/interface3/static/media/image5.fd01b986.jpg",
          },
          {
            id: 6,
            title: "passion fruit",
            image:
              t.p + "interface3/interface3/static/media/image6.9d3b261b.jpg",
          },
          {
            id: 7,
            title: "araguani",
            image:
              t.p + "interface3/interface3/static/media/image7.c5d7f97f.jpg",
          },
          {
            id: 8,
            title: "yuzu",
            image:
              t.p + "interface3/interface3/static/media/image8.8c84b94d.jpeg",
          },
          {
            id: 9,
            title: "sea salt caramel",
            image:
              t.p + "interface3/interface3/static/media/image9.0d98b234.jpg",
          },
          {
            id: 10,
            title: "tiramisu",
            image:
              t.p + "interface3/interface3/static/media/image10.6946b7f4.jpg",
          },
          {
            id: 11,
            title: "snowball",
            image:
              t.p + "interface3/interface3/static/media/image11.09793587.jpg",
          },
          {
            id: 12,
            title: "baileys puff",
            image:
              t.p + "interface3/interface3/static/media/image12.a1e6183d.jpg",
          },
        ],
        j = function () {
          return Object(l.jsx)("div", {
            className: "container",
            children: Object(l.jsx)("div", {
              className: "row",
              children: n.map(function (e, i) {
                return Object(l.jsx)(
                  "div",
                  {
                    className: "col-md-3",
                    children: Object(l.jsx)(r, {
                      title: e.title,
                      image: e.image,
                    }),
                  },
                  i
                );
              }),
            }),
          });
        },
        g = function (e) {
          var i = e.title,
            t = e.image;
          return Object(l.jsx)("section", {
            children: Object(l.jsxs)("div", {
              className: "card text-left animate__animated animate__fadeInUp",
              children: [
                Object(l.jsx)("div", {
                  className: "overflow",
                  children: Object(l.jsx)("img", {
                    src: t,
                    alt: i,
                    className: "card__img card-img-top",
                  }),
                }),
                Object(l.jsxs)("div", {
                  className: "card-body",
                  children: [
                    Object(l.jsx)("h4", {
                      className: "card-title subtitle",
                      children: i,
                    }),
                    Object(l.jsx)("p", {
                      className: "card-text text-secondary",
                      children:
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel praesentium commodi ullam nostrum quia mollitia illo ea, deserunt, incidunt ratione eum eaque doloribus eligendi perspiciatis laudantium! Nulla tenetur vel necessitatibus.",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        o = [
          {
            id: 1,
            title: "green tea",
            image:
              t.p + "interface3/interface3/static/media/image13.f6f2e305.jpg",
          },
          {
            id: 2,
            title: "black pepper",
            image:
              t.p + "interface3/interface3/static/media/image14.094e68e5.jpg",
          },
          {
            id: 3,
            title: "wasabi",
            image:
              t.p + "interface3/interface3/static/media/image15.4e2cc3ba.jpg",
          },
          {
            id: 4,
            title: "mont blanc",
            image:
              t.p + "interface3/interface3/static/media/image16.65255902.jpg",
          },
        ],
        u = function () {
          return Object(l.jsx)("div", {
            className: "container",
            children: Object(l.jsx)("div", {
              className: "row",
              children: o.map(function (e, i) {
                return Object(l.jsx)(
                  "div",
                  {
                    className: "col-md-3",
                    children: Object(l.jsx)(g, {
                      title: e.title,
                      image: e.image,
                    }),
                  },
                  i
                );
              }),
            }),
          });
        },
        p = function () {
          return Object(l.jsxs)("div", {
            className: "app",
            children: [
              Object(l.jsx)(m, {}),
              Object(l.jsx)("h2", {
                className: "text-center text-secondary lighter margin-bottom",
                children: "classic",
              }),
              Object(l.jsx)("div", {
                className: "cards",
                children: Object(l.jsx)(j, {}),
              }),
              Object(l.jsx)("h2", {
                className: "text-center text-secondary lighter margin-bottom",
                children: "curious",
              }),
              Object(l.jsx)("div", {
                className: "cards",
                children: Object(l.jsx)(u, {}),
              }),
            ],
          });
        };
      t(10), t(11);
      d.a.render(
        Object(l.jsx)(c.a.StrictMode, { children: Object(l.jsx)(p, {}) }),
        document.getElementById("root")
      );
    },
    8: function (e, i, t) {},
  },
  [[12, 1, 2]],
]);
//# sourceMappingURL=main.27bc0126.chunk.js.map
