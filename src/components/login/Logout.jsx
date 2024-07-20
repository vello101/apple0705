import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserProfile = () => {
    const handleLogout = () => {
        // 로그아웃 처리 로직을 구현합니다.

        sessionStorage.removeItem("token");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("role");
        sessionStorage.removeItem("storeid");
        // 페이지 이동
        navigate("/");
    };

    return (
        <div className="user-profile">
            <div className="user-logout-btn-container">
                <button className="user-logout-btn" onClick={handleLogout}>
                    로그아웃
                </button>
            </div>
        </div>
    );
};
