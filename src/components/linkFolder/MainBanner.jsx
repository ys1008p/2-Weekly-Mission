import { AddLinkForm } from './AddLinkForm';

export const MainBanner = () => {
  return (
    <section className='folder-banner add-link'>
      <h2 className='visually-hidden'>링크 추가하기</h2>
      <div className='container add-link'>
        <div className='center'>
          <AddLinkForm />
        </div>
      </div>
    </section>
  );
};
