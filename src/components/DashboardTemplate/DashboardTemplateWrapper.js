import styled from "styled-components";

const DashboardTemplateWrapper = styled.section`
  display: flex;
  height: 100vh;

  aside {
    background-color: #152238;
    color: white;
    width: 220px;
    position: sticky;
    top: 0;

    .list-group {
      .list-group-item {
        border-radius: 10px;
        border: 1px solid #eee !important;
        margin-bottom: 10px;
        padding: 0;
        overflow: hidden;
        background-color: transparent;

        a {
          background-color: #152238;
          color: white !important;
          text-decoration: none;
          padding: 7px 20px;
          color: black;
          display: block;

          &.active {
            background-color: rgba(255, 255, 255, 0.8);
            color: black !important;
          }
        }
      }
    }
  }
  .rightside {
    flex: 1;
    max-height: 100vh;
    overflow: auto;
    header {
      position: sticky;
      top: 0;
      background-color: white;
      z-index: 1000;
    }
    main {
    }
  }
`;

export default DashboardTemplateWrapper;
