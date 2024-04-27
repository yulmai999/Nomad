import styles from './review.module.scss';
import Image from 'next/image';

export default function Review() {
  return (
    <>
      <section className={styles.reviewSection}>
        <div className={styles.reviewTitle}>후기</div>
        <div className={styles.reviewNumContainer}>
          <div className={styles.reviewCal}>4.2</div>
          <div>
            <div className={styles.reviewMost}>매우 만족</div>
            <div className={styles.reviewNum}>
              <Image
                src="/assets/images/star.svg"
                alt="별점 아이콘"
                width={16}
                height={16}
              />
              1,300개 후기
            </div>
          </div>
        </div>
        <div className={styles.reviewContainer}>
          <div>
            <Image
              className={styles.profileImage}
              src="/assets/images/test-image.png"
              alt="프로필 이미지"
              width={45}
              height={45}
            />
          </div>
          <div className={styles.reviewWrapper}>
            <div className={styles.reviewerWrapper}>
              <div className={styles.reviewer}>이주영</div>|
              <div className={styles.reviewCreated}>2023. 2. 4</div>
            </div>
            <div>
              저는 저희 스트릿 댄서 체험에 참가하게 된 지 얼마 안됐지만, 정말
              즐거운 시간을 보냈습니다. 새로운 스타일과 춤추기를 좋아하는 나에게
              정말 적합한 체험이었고, 전문가가 직접 강사로 참여하기 때문에 어떤
              수준의 춤추는 사람도 쉽게 이해할 수 있었습니다. 강사님께서 정말
              친절하게 설명해주셔서 정말 좋았고, 이번 체험을 거쳐 새로운
              스타일과 춤추기에 대한 열정이 더욱 생겼습니다. 저는 이 체험을 적극
              추천합니다!"
            </div>
          </div>
        </div>
        <div className={styles.line}></div>

        <div className={styles.reviewContainer}>
          <div>
            <Image
              className={styles.profileImage}
              src="/assets/images/test-image.png"
              alt="프로필 이미지"
              width={45}
              height={45}
            />
          </div>
          <div className={styles.reviewWrapper}>
            <div className={styles.reviewerWrapper}>
              <div className={styles.reviewer}>이주영</div>|
              <div className={styles.reviewCreated}>2023. 2. 4</div>
            </div>
            <div>
              저는 저희 스트릿 댄서 체험에 참가하게 된 지 얼마 안됐지만, 정말
              즐거운 시간을 보냈습니다. 새로운 스타일과 춤추기를 좋아하는 나에게
              정말 적합한 체험이었고, 전문가가 직접 강사로 참여하기 때문에 어떤
              수준의 춤추는 사람도 쉽게 이해할 수 있었습니다. 강사님께서 정말
              친절하게 설명해주셔서 정말 좋았고, 이번 체험을 거쳐 새로운
              스타일과 춤추기에 대한 열정이 더욱 생겼습니다. 저는 이 체험을 적극
              추천합니다!"
            </div>
          </div>
        </div>
        <div className={styles.line}></div>

        <div className={styles.reviewContainer}>
          <div>
            <Image
              className={styles.profileImage}
              src="/assets/images/test-image.png"
              alt="프로필 이미지"
              width={45}
              height={45}
            />
          </div>
          <div className={styles.reviewWrapper}>
            <div className={styles.reviewerWrapper}>
              <div className={styles.reviewer}>이주영</div>|
              <div className={styles.reviewCreated}>2023. 2. 4</div>
            </div>
            <div>
              저는 저희 스트릿 댄서 체험에 참가하게 된 지 얼마 안됐지만, 정말
              즐거운 시간을 보냈습니다. 새로운 스타일과 춤추기를 좋아하는 나에게
              정말 적합한 체험이었고, 전문가가 직접 강사로 참여하기 때문에 어떤
              수준의 춤추는 사람도 쉽게 이해할 수 있었습니다. 강사님께서 정말
              친절하게 설명해주셔서 정말 좋았고, 이번 체험을 거쳐 새로운
              스타일과 춤추기에 대한 열정이 더욱 생겼습니다. 저는 이 체험을 적극
              추천합니다!"
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
