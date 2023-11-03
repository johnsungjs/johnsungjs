import PropTypes from 'prop-types';

const BigModal = ({ setShowModal, title, body }) => {
  return (
    <>
      <div className="redborder bg-dark opacity-50 w-screen h-screen z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed"
        onClick={() => setShowModal(false)}
      />
      <div className="fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[90vw] h-[90vh] bg-white shadow-xl overflow-auto rounded-xl p-10">
          <div className="flex">
            <div>{title}</div>
            <button className="absolute -right-2 -top-5 bg-slate-100 px-4 py-2 rounded-xl text-center shadow-xl"
              onClick={() => setShowModal(false)}
            >x</button>
          </div>
          <div>
            {body}
          </div>
          <button className="bg-primary rounded-xl px-4 py-2"
            onClick={() => setShowModal(false)}
          >close modal</button>
        </div>
      </div>
    </>
  );
};

BigModal.defaultProp = {
  title: "no title",
  body: "no body"
}

BigModal.propTypes = {
  setShowModal: PropTypes.func,
  title: PropTypes.string,
  body: PropTypes.string
}

export default BigModal;