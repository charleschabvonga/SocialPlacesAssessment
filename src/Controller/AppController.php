<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{

    #[Route('/', name: 'contact-us')]
    public function index(): Response
    {
        return $this->render('base.html.twig');
    }

    #[Route('/login', name: 'login')]
    public function login(): Response
    {
        return $this->render('base.html.twig');
    }

    #[Route('/register', name: 'register')]
    public function register(): Response
    {
        return $this->render('base.html.twig');
    }

    #[Route('/messages', name: 'messages')]
    public function messages(): Response
    {
        return $this->render('base.html.twig');
    }
}