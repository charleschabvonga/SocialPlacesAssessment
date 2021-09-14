<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{

    #[Route('/', name: 'contact-us')]
    public function index()
    {
        return $this->render('base.html.twig', [
            'controller_name' => 'AppController',
        ]);
    }

    #[Route('/{entry}', name: 'entry')]
    public function login()
    {
        return $this->render('base.html.twig', [
            'controller_name' => 'AppController',
        ]);
    }
}