import React from "react";

const TopMenu = () => {
	return (
		<div className="flex items-center justify-between py-3">
			<div className="h-full">
				<ul className="flex items-center text-[#6C6F71] gap-[30px] text-sm">
					<li className="hover:text-[#2A5E8D] cursor-pointer">О компании</li>
					<li className="hover:text-[#2A5E8D] cursor-pointer">Оплата</li>
					<li className="hover:text-[#2A5E8D] cursor-pointer">Доставка</li>
					<li className="hover:text-[#2A5E8D] cursor-pointer">Возврат</li>
					<li className="hover:text-[#2A5E8D] cursor-pointer">Отзывы</li>
					<li className="hover:text-[#2A5E8D] cursor-pointer">Вопрос-ответ</li>
					<li className="hover:text-[#2A5E8D] cursor-pointer">Новости</li>
					<li className="hover:text-[#2A5E8D] cursor-pointer">Контакты</li>
				</ul>
			</div>
			<div className="flex items-center gap-[30px]">
				<div>
					<p className="text-[13px]">Ежедневно, с 8:00 до 18:00</p>
				</div>
				<div>
					<p className="text-base font-bold">8 800 444 00 65</p>
				</div>
				<button className="rounded-sm bg-[#F2F6FC] text-[#2A5E8D] px-4 py-2 font-bold hover:bg-black hover:text-white transition-colors duration-200">
					Заказать звонок
				</button>
			</div>
		</div>
	);
};

export default TopMenu;
