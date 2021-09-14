<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class AppController extends AbstractController
{

    #[Route('/', name: 'contact-us')]
    public function index(SerializerInterface $serializer)
    {
        return $this->render('base.html.twig', [
            'user' => $serializer->serialize($this->getUser(), 'jsonld')
        ]);
    }

    #[Route('/{entry}', name: 'entry')]
    public function login(SerializerInterface $serializer)
    {
        return $this->render('base.html.twig', [
            'user' => $serializer->serialize($this->getUser(), 'jsonld')
        ]);
    }
}