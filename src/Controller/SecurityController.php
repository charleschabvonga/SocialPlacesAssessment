<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
// use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

// #[ApiResource]
// #[Route('/api')]
class SecurityController extends AbstractController
{
    #[Route('/login', name: 'app_login', methods: 'POST')]
    public function login(Request $request): JsonResponse
    {
        $user = $this->getUser();

        // return $this->json([
        //     // The getUserIdentifier() method was introduced in Symfony 5.3.
        //     // In previous versions it was called getUsername()
        //     'username' => $user->getUserIdentifier(),
        //     'roles' => $user->getRoles(),
        // ]);

        return new JsonResponse(null, 204, [
            'username' => $user->getUserIdentifier(),
            'roles' => $user->getRoles(),
        ]);
    }

    #[Route('/logout', name: 'app_logout')]
    public function logout()
    {
        throw new \Exception('should not be reached');
    }
}