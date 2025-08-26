package com.qube7.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

	@GetMapping({ "/", "/main" })
	public String home(Model model) {
		model.addAttribute("pageTitle", "주식회사 큐브7 | 메인");
		model.addAttribute("pageDescription", "한 주의 일상적 가치를 스캔하다. 주식회사 큐브7 입니다. ");
		model.addAttribute("pageImage", "https://www.qube7.co.kr/images/og/ogimage.png");
		model.addAttribute("pageUrl", "https://www.qube7.co.kr/");
		return "index";
	}

	@GetMapping("/about")
	public String about(Model model) {
		model.addAttribute("pageTitle", "주식회사 큐브7 | 회사소개");
		model.addAttribute("pageDescription", "큐브7 회사소개 페이지입니다.");
		model.addAttribute("pageImage", "https://www.qube7.co.kr/images/og/ogimage.png");
		model.addAttribute("pageUrl", "https://www.qube7.co.kr/about");
		return "about";
	}

	// 고객 맞춤 CS 솔루션 페이지
	@GetMapping("/business/cs")
	public String businessCS(Model model) {
		model.addAttribute("pageTitle", "주식회사 큐브7 | 고객 맞춤 CS 솔루션");
		model.addAttribute("pageDescription", "고객 요구에 맞춘 맞춤형 CS 솔루션.");
		model.addAttribute("pageImage", "https://www.qube7.co.kr/images/og/cs_og.png");
		model.addAttribute("pageUrl", "https://www.qube7.co.kr/business/cs");
		return "business-cs";
	}

	// 비즈니스 운영 솔루션 페이지
	@GetMapping("/business/operation")
	public String businessOperation(Model model) {
		model.addAttribute("pageTitle", "주식회사 큐브7 | 비즈니스 운영 솔루션");
		model.addAttribute("pageDescription", "업무 효율성을 높이는 비즈니스 운영 솔루션.");
		model.addAttribute("pageImage", "https://www.qube7.co.kr/images/og/operation_og.png");
		model.addAttribute("pageUrl", "https://www.qube7.co.kr/business/operation");
		return "business-operation";
	}

	// O4O 채널 솔루션 페이지
	@GetMapping("/business/o4o")
	public String businessO4O(Model model) {
		model.addAttribute("pageTitle", "주식회사 큐브7 | O4O 채널 솔루션");
		model.addAttribute("pageDescription", "온라인과 오프라인을 연결하는 O4O 채널 솔루션.");
		model.addAttribute("pageImage", "https://www.qube7.co.kr/images/og/o4o_og.png");
		model.addAttribute("pageUrl", "https://www.qube7.co.kr/business/o4o");
		return "business-o4o";
	}

	// All-In-One MYCar 솔루션 페이지
	@GetMapping("/business/mycar")
	public String businessMyCar(Model model) {
		model.addAttribute("pageTitle", "주식회사 큐브7 | All-In-One MYCar 솔루션");
		model.addAttribute("pageDescription", "차량 관리부터 운영까지 하나로 통합된 솔루션.");
		model.addAttribute("pageImage", "https://www.qube7.co.kr/images/og/mycar_og.png");
		model.addAttribute("pageUrl", "https://www.qube7.co.kr/business/mycar");
		return "business-mycar";
	}

	// QR 커뮤니케이션 플랫폼
	@GetMapping("/services/platform")
	public String servicesPlatform(Model model) {
		model.addAttribute("pageTitle", "주식회사 큐브7 | QR 커뮤니케이션 플랫폼");
		model.addAttribute("pageDescription", "비즈니스와 고객을 연결하는 스마트 QR 커뮤니케이션 플랫폼.");
		model.addAttribute("pageImage", "https://www.qube7.co.kr/images/og/platform_og.png");
		model.addAttribute("pageUrl", "https://www.qube7.co.kr/services/platform");
		return "services-platform";
	}

	// QR 커뮤니케이션 App
	@GetMapping("/services/app")
	public String servicesApp(Model model) {
		model.addAttribute("pageTitle", "주식회사 큐브7 | QR 커뮤니케이션 App");
		model.addAttribute("pageDescription", "'전국민 QR 커뮤니케이션'을 위한 APP 서비스.");
		model.addAttribute("pageImage", "https://www.qube7.co.kr/images/og/app_og.png");
		model.addAttribute("pageUrl", "https://www.qube7.co.kr/services/app");
		return "services-app";
	}

	@GetMapping("/culture")
	public String culture(Model model) {
		model.addAttribute("pageTitle", "주식회사 큐브7 | 기업문화");
		model.addAttribute("pageDescription", "큐브7의 기업문화를 소개합니다.");
		model.addAttribute("pageImage", "https://www.qube7.co.kr/images/og/culture_og.png");
		model.addAttribute("pageUrl", "https://www.qube7.co.kr/culture");
		return "culture";
	}

	@GetMapping("/contact")
	public String contact(Model model) {
		model.addAttribute("pageTitle", "주식회사 큐브7 | 문의하기");
		model.addAttribute("pageDescription", "큐브7 고객문의 페이지입니다.");
		model.addAttribute("pageImage", "https://www.qube7.co.kr/images/og/ogimage.png");
		model.addAttribute("pageUrl", "https://www.qube7.co.kr/contact");
		return "contact";
	}
}
