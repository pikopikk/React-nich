import { RiQuestionFill, RiEditFill } from "@remixicon/react";

export default function InputOrderReceipt() {
  return (
    <div className="collapse collapse-arrow duration-500 rounded-none border-b-0 border-l-0 border-r-0 pt-8 pb-4">
      <input type="checkbox" name="order-receipt" />

      {/* HEADER */}
      <div className="flex flex-row items-center justify-between collapse-title text-xl font-bold text-stone-900 duration-500 border-b border-b-stone-900/60">
        <span className="flex flex-row gap-2">
          Struk Pesanan
          <RiEditFill className="w"/>
        </span>
      </div>

      {/* CONTENT */}
      <div className="collapse-content text-sm duration-500 py-2">
        {/* Input Email */}
        <div className="flex flex-col gap-2 -mb-8">
          <label className="text-sm text-stone-600">Email</label>
          <input
            type="email"
            className="input validator bg-white text-stone-900 border border-gray-300 rounded-2xl px-5 py-3 shadow-sm w-full"
            placeholder="mail@site.com"
          />
          <p className="validator-hint text-sm text-stone-500">
            (Opsional) Masukkan email jika ingin menerima salinan struk.
          </p>
        </div>

        {/* Input Nomor Telepon */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-stone-600">Nomor Telepon</label>
          <input
            type="tel"
            className="input validator bg-white text-stone-900 border border-gray-300 rounded-2xl px-5 py-3 shadow-sm w-full tabular-nums"
            placeholder="08xxxxxxxxxx"
            pattern="[0-9]*"
            minLength="10"
            maxLength="13"
            title="Harus minimal 10 digit"
          />
          <p className="validator-hint text-sm text-stone-500">
            (Opsional) Nomor telepon digunakan jika ada kendala pesanan.
          </p>
        </div>

        <div className="-mt-8">
          <div className="flex flex-row items-center gap-2 text-base text-stone-900">
            <p>
              Apakah saya perlu Struk?
            </p>
            <label htmlFor="my_modal_7" >
              <RiQuestionFill className="w-5 h-5 text-[#7D8D86] btn-press"/>
            </label>
          </div>
          {/* modal */}
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box bg-white shadow-md text-sm text-stone-900">
              <h3 className="text-base font-bold">
                Informasi Struk
              </h3>
              <div className="pb-4 pt-2 flex flex-col items-start">
                <p>
                  Struk ini tidak <strong>Wajib</strong>. Jika anda menginginkannya anda bisa mengisi salah satu dari Email dan telepon, atau keduanya.
                </p>
              </div>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
          </div>
        </div>
      </div>
    </div>
  );
}
