<template>
  <section>
    <div title="解构现代化：温铁军演讲录" class="ranking_block_book">
      <div class="ranking_block_book_container">
        <div class="wr_bookCover">
          <img
            src="https://cdn.weread.qq.com/weread/cover/84/cpplatform_jkwtqhnizoarlsbxfqeqwf/t6_cpplatform_jkwtqhnizoarlsbxfqeqwf1693537540.jpg"
            alt="书籍封面"
            class="wr_bookCover_img"
          />
        </div>
        <div class="ranking_block_book_bookInfo">
          <div class="ranking_block_book_title">
            Deconstructing Modernization: Wen Tiejun's Speech
          </div>
          <p class="ranking_block_book_tag">
            <span>Cultivate immortals</span><span>Fantasy</span>
          </p>
          <p class="ranking_block_book_desc text-ellipsis-line-5">
            Wen Tiejun believes that the solution to the dilemma of
            modernization lies in "de-modernization". The key requirements are:
            first, "de-attachment" in the international arena. The cost of
            modernization will continue to be passed on to China. For this
            reason, we must treat globalization with prudence, maintain
            independence, and not be superstitious about globalization or
            Western liberal economic theories. At the same time, we must pay
            attention to problems and experiences with Chinese characteristics.
            2. To “de-urbanize” in China, it is necessary to promote rural
            construction, pay attention to the value and significance of rural
            society or traditional agricultural society, and no longer
            superstitiously believe in urbanization and “urbanization only”,
            including protecting the small peasant economy and promoting the
            organization of farmers To ensure that the ability of rural society
            to withstand the crisis of modernization is still there, thereby
            reducing the cost or impact of urban economic fluctuations. Third,
            in terms of development, we must go beyond "industrial civilization"
            and promote "ecological civilization construction", so as to reduce
            the "cost transfer" brought about by capital and the crisis caused
            by industrialization.
          </p>
        </div>
      </div>
      <div class="ranking_block_book_line"></div>
    </div>
    <h3 class="detail_title">Chapter List</h3>
    <ul class="chapter_list">
      <li
        v-for="(item, index) of [1, 2, 3, 4, 5, 6, 7, 8, 9]"
        @click="() => handleChapterDetail(item)"
      >
        <p class="text-ellipsis chapter_name">
          <span class="chapter_list_num">Chapter {{ index + 1 }}</span
          ><span>Globalization Crisis and Modernization Dilemma</span>
        </p>
        <div class="ranking_block_book_line"></div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const router = useRouter();

const handleChapterDetail = (chapter: any) => {
  router.push({
    path: `/h5/chapterDetail`,
    query: {
      chapterId: chapter
    }
  });
};
</script>

<style>
.ranking_block_book {
  .ranking_block_book_container {
    display: flex;
    .wr_bookCover {
      width: 160px;
      height: 238px;
      .wr_bookCover_img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .ranking_block_book_bookInfo {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding-left: 10px;
      justify-content: space-between;
      .ranking_block_book_title {
        font-size: 20px;
        font-weight: bold;
      }
      .ranking_block_book_tag {
        opacity: 0.6;
        font-size: 13px;
        > span {
          margin-right: 10px;
        }
      }
      .ranking_block_book_desc {
        opacity: 0.8;
        line-height: 1.5;
        margin-bottom: 0;
      }
    }
    &:hover {
      cursor: pointer;
    }
  }
  .ranking_block_book_line {
    height: 1px;
    margin: 12px 0;
    background-color: #efefef;
  }
  .text-ellipsis-line-5 {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 5;
    line-clamp: 5;
    -webkit-box-orient: vertical;
  }
}
.dark-mode .ranking_block_book_line {
  background-color: rgba(238, 240, 244, 0.15);
}
.ranking_block_book_line {
  height: 1px;
  margin: 8px 0;
  background-color: #efefef;
}
.sepia-mode .ranking_block_book_line {
  background-color: #f5f0e5;
}
.detail_title {
  font-size: 20px;
  padding: 0 10px;
}
.chapter_list {
  padding: 0 10px 30px;
  > li {
    list-style: none;
    &:hover {
      cursor: pointer;
    }
  }
  .chapter_name {
    opacity: 0.8;
  }
  .chapter_list_num {
    margin-right: 10px;
  }
}
.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
