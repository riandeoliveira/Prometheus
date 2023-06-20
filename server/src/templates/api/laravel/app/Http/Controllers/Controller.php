<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

/**
 * @OA\Info(
 *   title="<%= data.projectName %>",
 *   description="<%= data.description %>",
 *   version="0.0.1",
 *
 *   @OA\Contact(
 *     name="<%= data.author %>",
 *     email="<%= data.email %>",
 *     url="https://github.com/<%= data.githubUsername %>"
 *   ),
 *
 *   @OA\License(
 *     name="Apache 2.0",
 *     url="https://www.apache.org/licenses/LICENSE-2.0.html"
 *   ),
 *
 *   @OA\Server(
 *     url="http://localhost:8000",
 *     description="Local development server."
 *   ),
 *
 *   @OA\PathItem(
 *     path="/api"
 *   )
 * ),
 */
class Controller extends BaseController {
  use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
